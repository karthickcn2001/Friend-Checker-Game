let name = prompt('Enter your friend name: ');
let frnd = null;
switch(name){
    case 'karthick':
        frnd = 'is karthick your friend?';
        resp =prompt(`${frnd} , Type \'Yes\' or \'No\':` );
        if (resp === 'Yes'){
            console.log('you\'re welcome');
        }
        else {
            console.log('Sorry, try again');
        }
        break;
    case 'deepak':
        frnd = 'is deepak your friend?';
        resp =prompt(`${frnd} , Type \'Yes\' or \'No\':` );
        if (resp === 'Yes'){
            console.log('you\'re welcome');
        }
        else {
            console.log('Sorry, try again');
        }
        break;
    case 'manish':
        frnd = 'is manish your friend?';
        resp =prompt(`${frnd} , Type \'Yes\' or \'No\':` );
        if (resp === 'Yes'){
            console.log('you\'re welcome');
        }
        else {
            console.log('Sorry, try again');
        }
        break;
    case 'seeni':
        frnd = 'is seeni your friend?';
        resp =prompt(`${frnd} , Type \'Yes\' or \'No\':` );
        if (resp === 'Yes'){
            console.log('you\'re welcome');
        }
        else {
            console.log('Sorry, try again');
        }
        break;
    case 'krishna':
        frnd = 'is krishna your friend?';
        resp =prompt(`${frnd} , Type \'Yes\' or \'No\':` );
        if (resp === 'Yes'){
            console.log('you\'re welcome');
        }
        else {
            console.log('Sorry, try again');
        }
        break;
        default:
            console.log('Unknown');
}