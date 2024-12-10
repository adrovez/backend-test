pipeline {
    agent any
    environment{
        USERNAME= "cmd"
    }
    stages{
        stage("Build - Instalacion dependencias"){
            agent{
                docker{
                    label 'contenedores'
                    image 'node:22-alpine'
                    reuseNode true
                   
                }
            }
            stages{
                stage("Build - Instalacion dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("Build - ejecucion de test"){
                    steps{
                        sh 'npm run test'
                    }
                }
                stage("Build - Build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }     
            }                   
        }  
        stage("Quality Assurance"){
            agent{
                docker{
                    label 'contenedores'
                    image 'sonarsource/sonar-scanner-cli'
                    args '--network=devops-infra_default'
                    reuseNode true
                }
            }
            stages{
                stage("Quality Assurance - Sonarqube"){
                    steps{
                        withSonarQubeEnv('sonarqube'){
                            sh 'sonar-scanner'
                        }
                    }
                }
            }            
        }      
        stage("Delivery - Subir a Nexus"){
            steps{
                script{
                    docker.withRegistry("http://localhost:8082","registry"){
                        sh 'docker build -t backend-test .'
                        sh 'docker tag backend-test:latest localhost:8082/backend-test:latest'
                        sh 'docker push localhost:8082/backend-test:latest'
                    }
                }               
            }
        }
    }
}