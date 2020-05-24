/* global FontAwesomeConfig */

import fontawesome from '@fortawesome/fontawesome';
import faClock from '@fortawesome/fontawesome-free-regular/faClock';
fontawesome.config = {
  autoReplaceSvg: 'nest'
};
fontawesome.library.add(faClock);


/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i class="fas fa-check"></i>
*/