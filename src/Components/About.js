import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
      <h2 className="about-title">About</h2>
      <div className="about-data">
        <div className="about-img">
          <img src="assets/about2.jpg" alt="" />
        </div>
        <div>
          <h2 className="about-subtitle">A little bit about myself... </h2>
          <p className="about-text">
          With over 5 years of extensive experience as a DevOps Engineer and a Cloud Architect, 
          a dynamic and result-oriented approach is brought to my work. I take pride in holding 
          6 certifications in Cloud technologies and 3 certifications in Kubernetes, which showcase 
          my expertise in these areas. Throughout my career, teams have been guided towards technical
          excellence, and high-quality solutions have been delivered in both startup and large company 
          environments. The focus has been on the implementation of DevSecOps practices for high-traffic 
          productive services and the automation of the SDLC process. Responsibility is always embraced, 
          with a continuous commitment to growing intellectual capital by seeking out diverse experiences 
          and developing the career. A passionate belief is held that learning should be enjoyable as well.
            </p>
          <p><b>Languages and tools known:</b> </p>
          <p>
            <img className='tech-image' src="assets/aws.png" alt='aws'/>
            <img className='tech-image' src="assets/docker.png" alt='docker'/>
            <img className='tech-image' src="assets/kubernetes.svg" alt='k8s'/>
            <img className='tech-image' src="assets/rancher.png" alt='Rancher'/>
            <img className='tech-image' src="assets/dynatrace.png" alt='Dynatrace'/>
            <img className='tech-image' src="assets/loki.png" alt='Loki'/>
            <img className='tech-image' src="assets/consul.svg" alt='Consul'/>
            <img className='tech-image' src="assets/vault.svg" alt='Vault'/>
            <img className='tech-image' src="assets/redis.png" alt='Redis'/>
            <img className='tech-image' src="assets/rabbitmq.png" alt='RabbitMq'/>
            <img className='tech-image' src="assets/terraform.svg" alt='Terraform'/>
            <img className='tech-image' src="assets/argo.png" alt="argocd" />
          </p>
          <p>
            <img className='tech-image' src="assets/alibaba.svg" alt="alibabcloud" />
            <img className='tech-image' src="assets/azure-devops.svg" alt="azure-devops" />
            <img className='tech-image' src="assets/jenkins.png" alt="jenkins" />
            <img className='tech-image' src="assets/prometheus.png" alt='prometheus'/>
            <img className='tech-image' src="assets/grafhana.png" alt='grafana'/>
            <img className='tech-image' src="assets/nginx.png" alt='nginx'/>
            <img className='tech-image' src="assets/elk.png" alt='elk'/>
            <img className='tech-image' src="assets/django.svg" alt='django'/>
            <img className='tech-image' src="assets/zabbix.png" alt='zabbix'/>
            <img className='tech-image' src="assets/python.png" alt='python'/>
            <img className='tech-image' src="assets/newrelic.png" alt="New Relic" />
            <img className='tech-image' src="assets/git.png" alt="git" />
            <img className='tech-image' src="assets/gitlab.png" alt="gitlab" />
            <img className='tech-image' src="assets/github.png" alt="github" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
