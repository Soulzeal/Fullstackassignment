class User {
	constructor(username, password) {
	  this.username = username;
	  this._password = password;
	}
  
	get password() {
	  return this._password.replace(/./g, '*');
	}
  
	set password(newPassword) {
	  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
	  if (regex.test(newPassword)) {
		this._password = newPassword;
	  } else {
		console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
	  }
	}
  }
  
  const user = new User('myusername', 'MyPassword123');
  console.log(user.password); // Output: ************
  user.password = 'newpassword'; // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
  user.password = 'MyNewPassword123'; // Set the new password
  console.log(user.password); // Output: ***************
  