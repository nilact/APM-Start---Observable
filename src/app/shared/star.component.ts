import { Component, OnChanges, Input, Output,EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StartComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output()ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    onClick(){
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
    }
}