import './bootstrap';
// resources/js下のファイルはここに追記すれば、全てviteでコンパイルされる
import './calendar'; // これを追記

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
