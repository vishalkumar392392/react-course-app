pipeline {
    agent any

    tools {
        nodejs 'nodejs-14.17.0' // Use the name specified in your Jenkins configuration
    }

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
