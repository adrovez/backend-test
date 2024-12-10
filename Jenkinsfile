pipeline {
    agent any
    stages{
        stage("Build - Instalacion dependencias"){
            agent{
                docker{
                    image 'node:22-alpine'
                    reuseNode true
                   
                }
            }
            steges{
                stage("Build - Instalacion dependencias"){
                    steps{
                        sh 'npm install'
                    }
                }
                stage("Build - Build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }     
            }                   
        }        
    }
}