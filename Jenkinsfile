pipeline {
    agent { 
		node {
			label 'my-defined-label'
		} 
	}
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
		
		stage('test') {
            steps {
                sh 'npm run test'
            }
        }
		
		stage('create artifact') {
            steps {
                sh 'tar czf co2-emission-$BUILD_NUMBER.tar.gz .'
            }
        }
    }
}