# ionic打包apk ionic 3
    
## 环境nodejs
    1.安装方法
    2.设置环境变量
    3.测试 在cmd中输入node -v 能得到版本号就说明安装好了
    4. 使用nrm切换镜像源
        http://yijiebuyi.com/blog/4ef268db0dcfd2a42ad138a1a054bf0b.html
## 环境java
    1.安装jdk1.8版本
    2. 设置环境变量
        1. 记得设置一个JAVA_HOME变量 变量值是jdk的安装目录
        2. 再在path里添加%JAVA_HOME%/bin变量
    3. 测试 在cmd输入java -version 得到版本号就行

## 环境Android SDK
    1. 安装
    2. 设置环境变量
        1. 设置一个ADNROID_HOME变量 变量值是sdk安装目录
        2. 再在path里添加
            %ADNROID_HOME%/tools  
            %ADNROID_HOME%/platform-tools
            变量
        3.测试 运行CMD，输入android -h，如果出现一大堆指令，说明你的SDK安装无误，并且环境变量配置OK。
    3. 现在，打开SDK目录 在cmd里打开 SDK Manager.exe 打开界面上的Tools,选择options，先配置国内镜像：域名千万不要输入http或者https协议前缀，谁输谁哭。
    在勾选下面的Force https:.....
    回到主界面，点packages再点reload
    安装一些组件
    分别是[ Android SDK Tools,Android SDK platform-tools,Android SDK Build-tools]

## 环境gradle
    1. 安装
    打开：http://services.gradle.org/distributions/
    下载：gradle-4.1-bin.zip
    同样安装在JDK,SDK的目录下，便于查找。
    同样的配置环境变量：
    GRADLE_HOME=C:\Program Files\SDK\gradle-4.1
    ;%GRADLE_HOME%\bin
    测试命令（查看版本）：gradle -v

## 安装Ionic
    1. 打开Gitbash,全局安装ionic和cordova（IONIC是UI，cordova负责打包成apk,并且可以调用原生安卓的各种API）
    ```bash
    $ cnpm install -g ionic cordova
    ```
    2. 创建ionic项目
    ```bash
    $ ionic start app tabs
    ```
    耐心等待完成，在 cd 到 app 子目录(app是你的真实项目目录)，然后
    ```
    $ ionic serve
    ```
    稍等片刻，浏览器自动弹出预览界面(建议电脑安装Chrome浏览器)，并且支持持续热更新(Webpack的功能)


## 打包
    确保SDK,JDK没问题以后，使用指令
    ```
    $ ionic cordova build android --release
    ```
    (如果这条命令有问题，可以去掉–release然后debug编译，编译完成Dos会显示apk目录位置)

    如若你聪慧的双眼发现如下字眼：Build Success! 说明你已经成功打包了。耐心等待，命令行结束会提示你apk的生成位置。

    OK，此时你已经有了debug的包，但是这个包没有签名，不能发布。

    这里问题较多
    1. Error: Cannot find module '@ionic/app-scripts'
        解决npm install @ionic/app-scripts@latest --save-dev
    2. Cordova : Requirements check failed for JDK 1.8 or greater
        解决 下载java1.8
            http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
        把java的jdk目录设置环境变量JAVA_HOME
    3. you have not accepted the license agreements of the following SDK components:
        接受协议 
        从命令行接受许可协议的方式已经改变。您可以使用位于以下位置的SDK管理器：
        ~/Library/Android/sdk/tools/bin
        按如下所示运行sdkmanager：
        ./sdkmanager.bat --licenses
        然后一直接受就行

## apk签名
    此时，我们应该：
    1. 在JDK目录下的bin文件夹下（C:\Program Files\Java\jdk1.8.0_71\bin），先看看有没有keytool.exe和jarsigner.exe文件，这两个程序用于给APK签名，签名以后即可发布。（有）
    2.将Ionic生成的文件先命名为app.apk，然后复制一份当前的bin目录里，执行命令1，生成自己的签名文件，名为:zhangqiang.keystrore，别名也是这个，有效期20000天，仅仅在第一次生成签名文件，以后不需要
    3.执行完命令1，继续执行命令2即可完成签名打包。

    *最好用cmd打开*

    命令1：生成签名密钥
    ```
    /*
    使用工具, 签名：
    -genkey表示构建签名文件
    -v 显示在dos窗口中 
    -alias表示签名包的别名 
    -validity 签名有效期(天)
    姓名:填上，用你名字拼音全拼
    城市:随便填，不填也行
    国家: 随便填，不填也行
    密码口令：敲的时候不动，是因为保护隐私，别当做你电脑死机！
    */
    ```
    在CMD窗口执行如下命令，输入秘钥确认即可生成签名文件 yourname.keystore:(yourname换成你自己的名字)
    ```
    keytool -genkey -v -keystore zhangqiang.keystore -alias zhangqiang.keystore -keyalg RSA -validity 20000
    ```
    把outputs里的apk文件复制一份到项目根目录

    命令2：
    ```
     jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore yourname.keystore yourname.apk yourname //yourname.apk需要重命名
    ```


