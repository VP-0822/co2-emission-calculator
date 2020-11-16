pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
		
		stage('test') {
            steps {
                bat 'npm run test'
            }
        }
		
		stage('create artifact') {
            steps {
                bat 'tar czf co2-emission-${BUILD_NUMBER}.tar.gz .'
            }
        }
    }
}