curl -s https://static.us-east-1.prod.workshops.aws/public/8c4076ba-a416-424d-acc7-06e5cc2de102//static/20-infrastructure/InfrastructureApp.tgz | tar -xzv
cd InfrastructureApp
npm install
npm run build
cdk bootstrap
cd ~/environment/InfrastructureApp
cdk deploy
