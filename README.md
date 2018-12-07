# Shakal.io 🎭
## Peer-to-Peer video chat using WebRTC

> *NOTE:* If you're running this program either on the website shakal-io.netlify.com or on your `localhost`, do note that without a TURN relay server, this program will only work on your local network! Due to how symmetric NATs work, it is impossible as of now to set up a true peer-to-peer connection over the internet.

### Technology stack
1. React for web app.
2. NodeJS for http and ws signalling server.

### Easy Deploy

| React App | Signaling Server |
| --------- | ---------------- |
| [![Deploy Frontend to Netlify][Netlify-deploy-button]][Netlify-deploy-link] | [![Deploy Backend to Heroku][Heroku-deploy-button]][Heroku-deploy-link] |


### License

Copyright (C) 2018 Vikrant Gajria

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

[Netlify-deploy-link]: https://app.netlify.com/start/deploy?repository=https://github.com/vixrant/shakal-io
[Netlify-deploy-button]: https://www.netlify.com/img/deploy/button.svg
[Heroku-deploy-button]: https://www.herokucdn.com/deploy/button.svg
[Heroku-deploy-link]: https://heroku.com/deploy?template=https://github.com/vixrant/shakal-io
