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

        stage('Build Docker Image') {
            steps {
                // Build the Docker image for the React app
                sh 'docker system prune --all --force'
                sh 'docker stop course-react-app'
                sh 'docker rm course-react-app'
                sh 'docker rmi vishalkumar392/course-app:latest'
                sh 'docker build -t vishalkumar392/course-app .'
            }
        }

        stage('Run Container') {
            steps {
                // Run the container from the recently built image
                sh 'docker run -d -p 80:5000 --name course-react-app vishalkumar392/course-app:latest'
            }
        }
    }
}
