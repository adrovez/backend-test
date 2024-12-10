pipeline {
    agent any
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
                stage("Build - Build del proyecto"){
                    steps{
                        sh 'npm run build'
                    }
                }     
            }                   
        }        
    }
}