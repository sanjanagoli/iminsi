# Iminsi

![Trending](./trending-iminsi.gif)
![User](./user-flow%20(1).gif)

## Demo
A demo can be found here: https://drive.google.com/file/d/1Lbj5_L3wBXE6G4r8ygtTbf3JJaytQeI5/view?usp=sharing

## Description
Africa has a chronic media problem. It is very difficult to know what is happening in other countries in Africa without relying on western news coverage. Iminsi is the first all-African news app. The app uses the power of crowdsourcing to deliver a platform of reliable, local African news. Our top features include 1. **Crowdsourcing** data on reliability of news articles and sources to give our uses the most accurate information, 2. **Verified News Badge** that indicates to users which sources are most reliable, 3. **"For You" News** - we curate news based on a user's indicated interests (on regions, politics, science, sports, etc.), 4. **Format options** - we provide users an option between the article's webview and plain text document (useful where internet connection is slower).

## Architecture

Backend: https://github.com/sanjanagoli/iminsi-api

## Setup

`cd iminsi/iminsi` <br />
Run `expo start` in terminal (need to have Xcode simulator downloaded) <br />

## Deployment

In order to deploy, first run `expo start` <br />
Click the option to publish the project (on the left side of the screen). <br />
Enter your expo credentials <br />

## Authors

Meriem Fouad, Sanjana Goli, Abubakar Kasule, Rohith Mandavilli, Bryan Manzi, Katrina Yu <br />

## Other notes
What worked: We were able to successfully call the News API in our implementation. Our frontend developed a UI around display these news articles to users. We developed a system that allows users to login, indicate their preferences on articles, save articles to their profile, etc.
<br />
Future plans: In the future, we hope to call other external APIs that will allow us to aggregate news for more countries in Africa. We also hope to implement a automatic daily call to these external news APIs to fetch headlines on a daily basis. 

