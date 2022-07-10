# helm-gcp-deploy-with-ghactions

An example of a nodejs project automated to be deployed to gcp using helm with github actions ;)

Based on 

To give it a try:

On Local Environment:

1. Build images

 ```
 docker-compose build
 ```

2. Start container:
 ```
 docker-compose up
 ```

3. Check all has gone well visiting [http:localhost:3000/api/status](http:localhost:3000/api/status) and visualizing:
```
{"response":"All seems going well :)"}
```


On Production: 

1. Rename folder ```workflows_disabled``` to ```workflows``` inside ```.github``` folder
2. Rename all code from ```helm``` folder inside ```<>``` to your kubernetes instances
3. Replace code inside ```<>``` from your ```gke.yaml``` in the ```.github/workflows``` folder
4. Create your repository secrets for vars: ```GKE_SA_KEY``` and ```GKE_PROJECT```
4. Deploy to the ```main``` branch
5. Once the actions have finished check the deployment has gone OK going to your [http:externalServiceIp/api/status](http:externalServiceIp/api/status) or using ```kubectl get pods``` command


Finally: 

![Carlton Dance Gif](https://c.tenor.com/5aSwUta1sd4AAAAC/the-fresh-prince-of-bel-air-will-smith.gif)
