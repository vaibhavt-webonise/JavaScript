var ar=[5,4,2,8,2,1,4,5,8,5,2,8,8,8];
var count=0;

  for(i=0;i<=9;i++) {
    for(j=0;j<ar.length;j++) {
      if(ar[j]==i) {
        count++;
      }
  }
  if(count>0) {
    console.log(i+" "+count);
  }
  count=0;
}

