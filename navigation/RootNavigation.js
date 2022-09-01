import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function addListener(callback){
  if(navigationRef.isReady()){
    
    navigationRef.addListener('focus',()=>{callback})
  }
}



export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
