const STORAGE_KEY = "to-do";
export default{
	fetch:function(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save:function(item){
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
	}
}
