
let n = 5;
let k=2;
let arr=[1,5,3,4,2];
let count=0;

for (let i=0; i<=n-1; i++){
      
    for (let j=0; j<=n-1; j++){

        if( j==i ){  

            continue;

        }

        if( arr[j] - arr[i] == k){
      
            count++;
                 
        }
    }
}

console.log(count)




