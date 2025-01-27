# Angular Obfuscator

This project demonstrates code obfuscation in an Angular application using a custom Webpack configuration and `javascript-obfuscator`. It was generated with Angular CLI version `19.0.6`.

### What is Code Obfuscation? 

Code obfuscation involves modifying software code to enhance complexity and reducing readability to deter understanding and analysis. The main purpose of obfuscation is to protect the code from being reverse-engineered or tampered with. 

To know more about this topic, check out this [link](https://www.digitalguardian.com/blog/what-code-obfuscation-how-does-it-work). 

### Code Obfuscation In Angular

In case of Javascript / Typescript based applications, we have a package `javascript-obfuscator` which can be used for code obfuscation. This plugin allows for advanced configuration and usage, and in case of this Angular application, it was used with custom webpack configuration. 
More info can be found [here](https://github.com/javascript-obfuscator/javascript-obfuscator) in official Github repository. 

### How It Works? 

1. First, create a new Angular project. In this example, we used the following command: 

```
ng new angular-obfuscator --routing --style=css --minimal --inline-template=false --inline-style=false --package-manager=pnpm
```

2. We need custom webpack so that we can extend default configuration, and add `javascript-obfuscator` as a webpack plugin. So, run the following command to install custom webpack: 

```
npm i -D @angular-builders/custom-webpack
```

**Note:**
Complete details on how to configure custom webpack can be found [here](https://www.npmjs.com/package/@angular-builders/custom-webpack). For this example, we used `@angular-devkit/build-angular:browser` configuration as we don't have SSR / i18n or other advanced setup. 

3. Next, add some obfuscation presets e.g. in this example, you can find them under `js-obfuscation-presets` directory. 
4. Finally, we have to add required preset in `custom-webpack.config.js` file like sample below: 

```
var WebpackObfuscator = require('webpack-obfuscator');

// obfuscation presets 
var preset_default_obf_high_perf = require('./js-obfuscation-presets/default-obf-high-perf')
var preset_high_obf_low_perf= require('./js-obfuscation-presets/high-obf-low-perf')
var preset_medium_obf_opt_perf= require('./js-obfuscation-presets/medium-obf-optimal-perf')
var preset_low_obf_high_perf = require('./js-obfuscation-presets/low-obf-high-perf')

module.exports = {
  plugins: [
    new WebpackObfuscator(
     // Use any preset defined above in the "plugins" array below and compare "dist" folder "main.js" contents / file size
      preset_default_obf_high_perf
    )
  ]
}
```
5. Here are some screenshots: 

**Before Obfuscation**

![image](https://github.com/user-attachments/assets/f9abc8c4-57ff-4fe3-8ab1-3f5d580fbc02)

**After Obfuscation (Default Preset)**

![image](https://github.com/user-attachments/assets/a2ac4608-8943-4436-ab05-35c9286d08a8)

### When to Use Code Obfuscatoin in Angular Apps?
Code obfuscation is not a 100% foolproof way to secure your application, as determined attackers can still deobfuscate the code with enough effort. However, it can act as a strong deterrent by significantly increasing the time and complexity required to analyze or reverse-engineer your JavaScript, making it a useful layer of protection in certain scenarios.

**Use it if:**

- Protecting critical intellectual property in the front-end code is a top priority.
- The app includes proprietary algorithms or sensitive logic that can't be offloaded to the back end.
- Your project is in a highly competitive or security-conscious industry (e.g., finance or enterprise apps).

**Avoid it if:**

- The increase in bundle size or performance impact outweighs the security benefits.
- The app already follows best practices (e.g., logic on the back end, proper API security).
- It’s best used as a complementary measure, not a primary security mechanism.

### 🤝 Contributing ##
Feel free to fork, improve, or share feedback via issues or pull requests!

### 📜 License
This project is licensed under the MIT License.

### About Me
𝗣𝗦: 
👋 Hi, I'm Solat, a Senior Frontend Engineer specializing in Angular, with a strong full-stack background.
I'm actively looking for remote full-time, contract, or freelance opportunities. If you're looking for someone to bring expertise and value to your next project, feel free to reach out at solataliagha@gmail.com or connect with me on LinkedIn.

If you find this repository useful or inspiring, please consider giving it a ⭐!




