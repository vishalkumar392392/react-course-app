pipeline {
    agent any

    stages {

        stage('NPM Install') {
            steps {
                // Install project dependencies using npm
                sh 'npm install'
            }
        }

        stage('NPM Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('PM2 Serve') {
            steps {
                // Serve the built React app using PM2
                sh 'pm2 serve build 80 --spa'
            }
        }
    }
}
