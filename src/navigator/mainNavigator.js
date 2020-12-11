import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList184616Navigator from '../features/ArticleList184616/navigator';
import ArticleList184615Navigator from '../features/ArticleList184615/navigator';
import ArticleList184614Navigator from '../features/ArticleList184614/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList184616: { screen: ArticleList184616Navigator },
ArticleList184615: { screen: ArticleList184615Navigator },
ArticleList184614: { screen: ArticleList184614Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
