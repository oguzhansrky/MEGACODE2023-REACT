pipeline {
  agent any
		 environment {
        NODE_ENV = 'production'
registry = "https://core.harbor.domain:8443"
    }
  stages {
    stage('Checkout Source') {
      steps {
        checkout scm
      }
    }
	stage("Build image") {
		steps {
			script {
				myapp = docker.build("dijipol/megacode-2023-frontend:${env.BUILD_ID}")
			}
		}
	}
    
	stage("Push image") {
		steps {
			script {
					docker.withRegistry('https://core.harbor.domain:8443', 'harbor_admin_password') {
					myapp.push("latest")
					myapp.push("${env.BUILD_ID}")
				}
			}
		}
	}

    stage('Deploy App') {
      steps {
        script {
          sh "kubectl --kubeconfig=/root/.kube/newconfig apply -f Deployment.yaml"
	  sh "kubectl --kubeconfig=/root/.kube/newconfig set image deployment/megacode-2023-frontend megacode-2023-frontend=core.harbor.domain:8443/dijipol/megacode-2023-frontend:${env.BUILD_ID} -n web"
        }
      }
    }
  }
}