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

        stage('Build Docker Image') {
            steps {
                // Build the Docker image for the React app
                sh 'docker build -t vishalkumar392/course-app .'
            }
        }

        stage('Run Container') {
            steps {
                // Run the container from the recently built image
                sh 'docker run -d -p 3000:5000 vishalkumar392/course-app:latest'
            }
        }

        // stage('PM2 Serve') {
        //     steps {
        //         sh 'pm2 serve build 80 --spa'
        //     }
        // }
    }
}
