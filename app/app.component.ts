import { Component, OnInit } from "@angular/core";
import { DataService, Products } from "./index";

@Component({
    moduleId: module.id,
    selector: "my-table",
    templateUrl: "app.component.html",
    styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css",
        "app.component.css"
    ]
})
export class AppComponent implements OnInit{
    public ProductsList: Products[];
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.ProductsList = this.dataService.getData();
    }

    onRemove(remove: Products){
        console.log(remove.name);
        const index = this.ProductsList.findIndex(prod => prod.id == remove.id);
        if (index > -1) {
            this.ProductsList.splice(index, 1);
        }
    };
    StylesColor(addStyle: Products) {
        const styles = {
            "background-color": "#ff0000"
        };
        const style = this.ProductsList.find(prod => prod.price == addStyle.price);
        if(style.price >= 800){
            return styles;
        }
    };
    addItem(id: number, name: string, price: number): void {
        if(id == null || name.trim() == '' || name == null || price == null){
            return
        }else{
            this.ProductsList.push(new Products(id, name, price));
        }
    }
}