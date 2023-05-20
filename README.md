# Ball tracker (Name TBD)

## Description

(Not all of these features have been implemented yet)

This project is a React Native Expo application that utilizes device camera capabilities to capture videos of moving objects such as golf balls,
baseballs, soccer balls, etc. It calculates and displays various metrics, including speed, distance, and time in the air. The app serves practical
purposes like measuring pitching speed, kicking distance, and golf ball analysis for distance and maximum height. Additionally, it offers advanced
features such as user management, data comparison, and performance tracking over time.

## Ideas

In addition to the above features, there are plans to conduct an extensive number of test runs, recording true results for various scenarios. These
recorded results will be compared to the calculated metrics obtained by the application. By analyzing the disparities between the actual and
calculated results, valuable data will be collected. This data will then be utilized to train a machine learning AI model. The objective is to develop
an AI that can effectively compensate for inaccuracies and biases introduced by factors such as camera limitations and frame rate variances. Multiple
test runs will be performed using different frame rates to observe the impact on accuracy, enabling the AI to adapt and adjust its compensation
weights accordingly. This machine learning approach aims to enhance the application's precision and provide more reliable metrics for users.

Another innovative approach to improve accuracy and realism is to leverage the speed change over multiple frames. By analyzing the velocity
differences between consecutive frames, such as frames 1-2 indicating a speed of 5 m/s and frames 2-3 indicating a speed of 4.5 m/s, it becomes
possible to estimate the impact of wind resistance on the moving object. Incorporating these velocity differentials into the calculation allows for a
more precise determination of the distance traveled by accounting for factors like wind resistance. This enhancement further enhances the accuracy and
realism of the distance calculation, providing users with more reliable results that consider real-world dynamics.

To further refine the wind resistance calculations, the application can leverage the user's location and access a weather API to retrieve local
weather data, specifically the speed of the wind in the area. By integrating this real-time wind speed information into the calculations, the app can
more accurately incorporate the impact of wind resistance on the moving object. With this additional data, users can obtain calculations that simulate
the theoretical maximum values without the influence of wind. This feature allows users to evaluate their performance under ideal conditions,
providing valuable insights and enabling them to set goals and track progress in various wind conditions. By incorporating real-time weather data, the
application enhances its functionality and provides users with a comprehensive analysis of their performance.

## Installation

Note: This project is still in development and is not yet available on the App Store or Google Play Store. To run the app, you must have the Expo CLI
installed. Once you have it installed, run the following commands:

```bash
git clone https://github.com/jordanlandry/ball-tracker.git
cd ball-tracker
yarn install
npx expo start
```

For detailed instructions on setting up Expo and running the application, visit the [Expo documentation](https://docs.expo.dev/).

## Features

- Capture videos of various sports balls in motion.
- Analyze the recorded video to extract relevant metrics.
- Display speed, distance, time in the air, and elevation of the ball.
- User management: Create and manage different user profiles on your device.
- Data comparison: Compare metrics between different users and different videos.
- Performance tracking: Track your performance over time and see how you improve.
- Intuitive UI: Simple and easy-to-use interface.
- Cross-platform: Works on both iOS and Android devices.

## Usage

1. Launch the application on your mobile device or emulator.
2. Create a user profile or select an existing one.
3. Select the type of ball you are recording.
4. Line up the ball with the ball icon on the screen.
5. Tap the screen to start recording.
6. Throw, kick, or hit the ball.
7. Tap the screen again to stop recording.
8. You will be asked to confirm the position of the ball to ensure accuracy.
9. Once the data is calculated and displayed, you can either save or discard the video.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes and additions.
4. Test your changes and ensure they work as intended.
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin my-new-feature`
7. Submit a pull request detailing your changes and additions.

Please ensure your contributions adhere to the project's coding standards.
