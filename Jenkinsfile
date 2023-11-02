pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {

        stage('PM2 INSTALL') {
            steps {
                sh 'npm install -g pm2'
            }
        }

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
                sh 'pm2 serve build 80 --spa'
            }
        }
    }
}
