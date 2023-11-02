pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {

        stage('NPM Install') {
             steps {
                sh 'npm install'
        }
        }

        stage('NPM Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('PM2 Serve') {
            steps {
                sh 'pm2 start src/App.js --name "my-app" --no-daemon'
            }
        }
    }
}
