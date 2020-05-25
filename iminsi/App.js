import React from 'react';
// import { View, Text } from 'react-native';
// import HTML from 'react-native-render-html';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BottomNavigation from './navigation/BottomNavigation';
import rootReducer from './reducers/index';

console.disableYellowBox = true;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App(props) {
  // const htmlContent = `
  // <div><div><div><div><div><div><div><div><span><a href="https://www.nme.com/news">News</a></span> <span><a href="https://www.nme.com/news/gaming-news">Gaming News</a></span></div></div><div><div><h1>Ubisoft sues Apple, Google for selling ‘Rainbow Six: Siege’ clone</h1></div></div><div><div><p>Apple and Google have allegedly refused to remove ‘Area F2’ from its stores</p></div></div><div><div><div><span>By</span> <a href="https://www.nme.com/author/ssingh">Surej Singh</a></div></div></div>
  // <div><div>18th May 2020</div></div></div></div></div></div><div><div><div><div><div><div><img src="https://www.nme.com/wp-content/uploads/2020/05/rainbow-six-siege-credit-ubisoft@2000x1270-1-696x442.jpg" alt="Artwork from Tom Clancy's Rainbow Six: Siege" />Tom Clancy's Rainbow Six: Siege. Credit: Ubisoft</div></div><div><div><div><div><div><div><p>Video game publisher <a href="https://www.nme.com/brands/ubisoft">Ubisoft</a> has filed a lawsuit against Apple and Google for selling a game that’s a “near carbon copy” of the company’s 2015 title, <em>Tom Clancy’s Rainbow Six: Siege.</em></p><ul><li><strong>Read More:</strong>
  // <a href="https://www.nme.com/reviews/game-reviews/legends-of-runeterra-review-exciting-visuals-excellent-design-make-it-one-of-the-best-digital-ccgs-around-2669215">‘Legends Of Runeterra’ review: exciting visuals,
  // excellent design make it one of the best digital CCGs around</a></li></ul><p>According to a <a href="https://www.bloomberg.com/news/articles/2020-05-16/ubisoft-sues-apple-google-over-alibaba-s-rainbow-six-ripoff">report from <em>Bloomberg</em></a>, the lawsuit stems from both companies’ refusal to pull a clone of Ubisoft’s wildly popular <em>Tom Clancy’s Rainbow Six: Siege</em> from their respective Google Play and Apple App stores. The game in question is <em>Area F2</em>, a mobile FPS by Ejoy.com, a subsidiary of Alibaba, that Ubisoft copies <em>Rainbow Six: Siege.</em></p><p>Ubisoft claims that <em>Area F2</em> copies “virtually every aspect” of <em>Rainbow Six: Siege</em>, including its user interface, the final score screen and the operator selection screen. The company also added that <em>Rainbow Six: Siege</em> “is among the most popular competitive multiplayer games in the world, and is among Ubisoft’s most valuable intellectual properties”.</p><div><span>Advertisement</span></div><p>The video game publisher also said
  // it had notified Apple and Google that <em>Area F2</em> infringes upon the copyright of its famous shooter franchise, and that the companies have refused to remove the game from their respective digital marketplaces.</p><p><em>Area F2</em>, which launched last month, <a href="https://play.google.com/store/apps/details?id=com.qookka.areaf2&amp;hl=en_GB">is described</a> as “the first Close-Quarters Battle shooting game on mobile” that enables players to battle in “ultra-realistic environments as attacker and defender, playing as one of a wide selection of agents, each with their own special ability”. The game is currently available on <a href="https://www.nme.com/tag/ios">iOS</a> and <a href="https://www.nme.com/tag/ANDROID">Android</a>.</p><p>Ubisoft’s online multiplayer FPS, <em>Tom Clancy’s Rainbow Six: Siege</em>, was first released in 2015, and grew steadily over the last few years to become one of the world’s most popular and online games. It is currently available on <a href="https://www.nme.com/tag/ps4">PS4</a>, <a href="https://www.nme.com/tag/xbox-one">Xbox One</a> and <a href="https://www.nme.com/tag/PC">PC</a>.</p><div></div><div></div><p>In other Ubisoft news, the studio’s upcoming <a href="https://www.nme.com/games/assassins-creed-valhalla"><em>Assassin’s Creed: Valhalla</em></a> is set to receive a DLC pack based on Scandinavian legend Beowulf. ‘The Legend Of Beowulf’ DLC will be a part of the game’s Season Pass, according to the
  // <a href="https://store.ubi.com/de/assassin-s-creed-valhalla-ultimate-edition/5e84a5065cdf9a21c0b4e737.html?edition=Ultimate%20Edition">German Ubisoft store</a>.</p><div><span>Advertisement</span></div></div></div><div><div><ul><li><span>Related Topics</span></li><li>
  // <a href="https://www.nme.com/tag/android">Android</a></li><li><a href="https://www.nme.com/tag/ios">iOS</a></li><li><a href="https://www.nme.com/tag/pc">PC</a></li><li><a href="https://www.nme.com/tag/ps4">PS4</a></li><li><a href="https://www.nme.com/tag/xbox-one">Xbox One</a></li></ul></div></div><div><div><div></div></div></div></div></div></div></div></div></div><div><div><div><span>Advertisement</span></div><div><div></div></div><div><span>Advertisement</span></div></div></div></div></div></div></div><span></span><span><span></span></span><span></span>
  // `;
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
