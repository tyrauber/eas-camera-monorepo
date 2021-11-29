const {
  withProjectBuildGradle,
  createRunOncePlugin,
} = require('@expo/config-plugins');

// See: https://github.com/expo/expo/blob/6877c1f5cdca62b395b0d5f49d87f2f3dbb50bec/packages/expo-camera/plugin/src/withCamera.ts#L18
const wrongPath = `url "$rootDir/../node_modules/expo-camera/android/maven"`;
// See: https://github.com/expo/expo/blob/b574deb5b399b05bbd16a1fd9d6232e6d58c27e8/packages/expo-camera/plugin/src/withCamera.ts#L23
const rightPath = `url new File(["node", "--print", "require.resolve('expo-camera/package.json')"].execute(null, rootDir).text.trim(), "../android/maven")`;

function withCameraMonorepo(config) {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      // Try to patch the hardcoded non-monorepo path with dynamic imports, to make it work with monorepos
      config.modResults.contents = config.modResults.contents.replace(wrongPath, rightPath);
    } else {
      throw new Error('Cannot fix camera maven gradle because the build.gradle is not groovy');
    }

    return config;
  });
}

// This package doesn't exists, but it helps keeping track if this was executed already
module.exports = createRunOncePlugin(withCameraMonorepo, 'expo-camera-monorepo-fix', '1.0.0');
