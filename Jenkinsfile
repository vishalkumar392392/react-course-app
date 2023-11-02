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
                sh 'serve -s build -l 3000'
            }
        }
    }
}
