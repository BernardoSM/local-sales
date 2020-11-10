import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCog,
  faColumns,
  faCoins,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faUserTie,
  faUserTimes,
  faUserPlus,
  faSearch,
  faSort,
  faPlus,
  faTimes,
  faUser,
  faCaretDown,
  faCheckSquare,
  faTimesCircle,
  faSyncAlt,
  faSortUp,
  faSortDown,
  faGlobeAmericas,
  faDownload,
  faTasks,
  faFolderPlus,
  faCamera,
  faCheck,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCreditCard,
  faCalendarAlt,
  faSquare
} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCog,
  faColumns,
  faSquare,
  faCheck,
  faCoins,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faUserTie,
  faUserTimes,
  faUserPlus,
  faSearch,
  faSort,
  faPlus,
  faTimes,
  faUser,
  faCaretDown,
  faCheckSquare,
  faTimesCircle,
  faSyncAlt,
  faSortUp,
  faSortDown,
  faGlobeAmericas,
  faDownload,
  faTasks,
  faFolderPlus,
  faCamera,
  faArrowRight,
  faBell,
  faCreditCard,
  faCalendarAlt,
  faSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
