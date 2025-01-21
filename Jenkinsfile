pipeline {
    agent any

    environment {
        DEPLOYMENT_DIR = 'C:\\DeploymentDirectory'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-username/your-react-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Linting') {
            steps {
                bat 'npx eslint src/'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy Application') {
            steps {
                bat """
                xcopy build\\* ${env.DEPLOYMENT_DIR} /E /H /C /I
                """
            }
        }

        stage('Post-Deployment Testing') {
            steps {
                bat """
                curl http://localhost:3000 || echo "App not running"
                """
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs.'
        }
    }
}
