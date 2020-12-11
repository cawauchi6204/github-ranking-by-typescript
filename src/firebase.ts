import firebase from 'firebase'

export const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth = firebase.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export const user = auth.currentUser

let userList: any[]
if (user !== null) {
	userList = user!.providerData.map((profile) => {
		console.log('Sign-in provider: ' + profile!.providerId)
		console.log('  Provider-specific UID: ' + profile!.uid)
		console.log('  Name: ' + profile!.displayName)
		console.log('  Email: ' + profile!.email)
		console.log('  Photo URL: ' + profile!.photoURL)
	})
}

export const getAllUser = async () => {
	const users: any[] = []
	db.collection('users')
		.get()
		.then((docs) => {
			if (docs) {
				docs.forEach((doc) => {
					users.push(doc.data())
				})
			}
			console.log(users)
		})
		.catch((error) => {
			console.log(error.message)
		})
}

export const githubSignIn = () => {
	auth.signInWithPopup(githubProvider)
		.then((result) => {
			// const token = result.credential
			// const user = result.user
			console.log(result)
			const userName = result.additionalUserInfo?.username
			const userInfo = result.additionalUserInfo?.profile
			if (userName) {
				console.log(userName)
				console.log(userInfo)
			}
			return db.collection('users').doc(`${userName}`).set({
				data: result.additionalUserInfo?.profile,
			})
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message
			console.log(errorCode, errorMessage)
		})
}

export const githubSignOut = () => {
	auth.signOut()
		.then(() => {
			alert('Signout successfull')
		})
		.catch((error) => {
			const errorMessage = error.message
			alert('Siginout faild' + errorMessage)
		})
}

export const googleSignIn = () => {
	auth.signInWithPopup(googleProvider)
		.then((result) => {
			const token = result.credential
			const user = result.user
		})
		.catch((error) => {
			const errorCode = error.errorCode
			const errorMessage = error.message
			const email = error.email
			const credential = error.credential
		})
}
