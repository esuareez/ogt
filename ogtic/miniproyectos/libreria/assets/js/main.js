/* CLASE DEL LIBRO */
class Libro{
    constructor(title, author, year, type){
        this.author = author;
        this.title = title;
        this.year = year;
        this.type = type;
    }

    get getTitle() {
        return this.title;
    }

    set setTitle(title){
        this.title = title;
    }

    get getAuthor(){
        return this.author;
    }

    set setAuthor(author){
        this.author = author;
    }

    get getYear(){
        return this.year;
    }

    set setYear(year){
        this.year = year;
    }

    get getType(){
        return this.type;
    }

    set setType(type){
        this.type = type;
    }

}

export default Libro;