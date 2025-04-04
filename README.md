# api-whastapp-2
 
pasos para el vps:
* sudo apt-get update && sudo apt-get upgrade -y   
* curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
*export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
* nvm install 20
* npm i pnpm@latest pm2 --global
* git clone https://github.com/AlejanDroox/api-whastapp-3.git
* cd api-whastapp-3/base-ts-baileys-memory/
* pnpm install
* 
