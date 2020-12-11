import axios from 'axios'
// const grassurl = `https://github.com/users/${user_name}/contributions`
// const user_name = 'cawauchi6204'
export const getGrass = (url: string) => {
  axios.get(url).then((res) => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })
	// const grassElement = response
	// 	.toString()
	// 	.match(/<rect(?: [\s\S]+?)?\/>/g)
	// const grassArray = grassElement!
	// 	.map((x) => {
	// 		return {
	// 			data_date: x.split(' ')[8].slice(11, 21),
	// 			data_count: Number(
	// 				x.split(' ')[7].split('"').join('').slice(11)
	// 			),
	// 		}
	// 	})
	// 	.reverse()
	// return grassArray
}
