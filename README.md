## RN + @polkadot/keyring

Adapted from [qalqi/AwesomeProject](https://github.com/qalqi/AwesomeProject)

![screenshots](output.png)

### Setup & running

Assuming MacOS and yarn, initialize the project with -

```
yarn
react-native link
cd ios && pod install && cd ..
```

Run the metro bundler with additional memory options since the asm.js deps are big -

```
NODE_OPTIONS=--max_old_space_size=8192 yarn start
```

Be aware that this takes a significant time for the first clean build. Make a coffee, drink a beer, go for a walk or play with the dog while it is building.

In a new tab, start the emulator, in this case running iOS -

```
yarn ios
```

If (at some point) you need to clean all the caches, i.e. your dog needs some attention and you need an excuse to walk away on the next build, you can run -

```
yarn clean:perfect
```
