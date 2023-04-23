import mySearcher from "./components/mySearcher.js";
//import myButtons from "./components/myButtons.js";
import myMusic from "./components/myMusic.js";
import myPagination from "./components/myPagination.js";
import myFooter from "./components/myFooter.js";

import {music} from "./logic/myMusic.js";
import {logic} from "./logic/myGetPokemon.js"
//import {buttons} from "./logic/myButtons.js";


mySearcher.show();
//myButtons.show();
myMusic.show();
myPagination.show();
myFooter.show();

music();
logic();
//buttons();