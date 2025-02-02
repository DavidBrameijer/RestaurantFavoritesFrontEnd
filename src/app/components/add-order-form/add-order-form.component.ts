import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order } from '../../Models/order';

@Component({
  selector: 'app-add-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order-form.component.html',
  styleUrl: './add-order-form.component.css'
})
export class AddOrderFormComponent {
  @Output() Created = new EventEmitter<Order>();
  formOrder: Order = {} as Order;

  emitCreate(){
    let result:Order = {...this.formOrder};
    this.Created.emit(result);
    this.formOrder = {} as Order;
  }
}
