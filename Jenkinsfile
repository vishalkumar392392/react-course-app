pipeline {
    agent any

    stages {

        steps {
                // Install Node.js and npm (if not already installed)
                sh 'curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -'
                sh 'sudo yum install -y nodejs'

                // Install project dependencies using npm
                sh 'npm install'
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
