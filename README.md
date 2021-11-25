# eas-camera-monorepo

Ran into an EAS build error on Expo 43 related to camera permissions with Android.

Found the following issue on [expo-camera package breaks the EAS build for android](
https://github.com/expo/expo/issues/14844)

This repo is an attempt to isolate an replicate the issue.

## Replicated on EAS

Fails in run gradlew:

```
Running './gradlew :app:assembleRelease' in /root/workingdir/build/apps/expo/android
Downloading https://services.gradle.org/distributions/gradle-6.9-all.zip
Unzipping /root/.gradle/wrapper/dists/gradle-6.9-all/dooywd8nv05k16orzxge2b1bs/gradle-6.9-all.zip to /root/.gradle/wrapper/dists/gradle-6.9-all/dooywd8nv05k16orzxge2b1bs
Set executable permissions for: /root/.gradle/wrapper/dists/gradle-6.9-all/dooywd8nv05k16orzxge2b1bs/gradle-6.9/bin/gradle
Welcome to Gradle 6.9!
Here are the highlights of this release:
 - This is a small backport release.
- Java 16 can be used to compile when used with Java toolchains
- Dynamic versions can be used within plugin declarations
- Native support for Apple Silicon processors
For more details see https://docs.gradle.org/6.9/release-notes.html
To honour the JVM settings for this build a single-use Daemon process will be forked. See https://docs.gradle.org/6.9/userguide/gradle_daemon.html#sec:disabling_the_daemon.
Daemon will be stopped at the end of the build
> Configure project :expo-structured-headers
Warning: The 'kotlin-android-extensions' Gradle plugin is deprecated. Please use this migration guide (https://goo.gle/kotlin-android-extensions-deprecation) to start working with View Binding (https://developer.android.com/topic/libraries/view-binding) and the 'kotlin-parcelize' plugin.
> Configure project :expo
Using expo modules
? expo-application (4.0.0)
? expo-camera (12.0.3)
? expo-constants (12.1.3)
? expo-file-system (13.0.3)
? expo-font (10.0.3)
? expo-json-utils (0.2.0)
? expo-keep-awake (10.0.0)
? expo-manifests (0.2.2)
? expo-modules-core (0.4.8)
? expo-splash-screen (0.13.5)
? expo-structured-headers (2.0.0)
? expo-updates (0.10.15)
[stderr] FAILURE:
[stderr] Build failed with an exception.
[stderr] * What went wrong:
[stderr] Could not determine the dependencies of task ':app:lintVitalRelease'.
[stderr] > Could not resolve all artifacts for configuration ':app:debugCompileClasspath'.
[stderr]    > Could not find com.google.android:cameraview:1.0.0.
[stderr]      Required by:
[stderr]          project :app > project :expo > project :expo-camera
[stderr] * Try:
[stderr] Run with
[stderr] --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
[stderr] * Get more help at https://help.gradle.org
[stderr] BUILD FAILED in 1m 37s
Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.9/userguide/command_line_interface.html#sec:command_line_warnings
Error: Gradle build failed with unknown error. Please see logs for the "Run gradlew" phase.
```
