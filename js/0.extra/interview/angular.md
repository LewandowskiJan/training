# Angular

## Life cycle hooks

|     | Interface           | Method                  |
| --- | ------------------- | ----------------------- |
| 1   | OnInit              | ngOnInit()              |
| 2   | OnChanges           | ngOnChanges()           |
| 3   | DoCheck             | ngDoCheck()             |
| 4   | AfterContentInit    | ngAfterContentInit()    |
| 5   | AfterContentChecked | ngAfterContentChecked() |
| 6   | AfterViewInit       | ngAfterViewInit()       |
| 7   | AfterViewChecked    | ngAfterViewChecked()    |
| 8   | OnDestroy           | ngOnDestroy()           |

- order

constructor > ngOnInit() > ngOnChanges() > ngDoCheck() >
ngAfterContentInit() > ngAfterContentChecked() >
ngAfterViewInit() > ngAfterViewChecked() > ngOnDestroy()

- implementation example

```typescript
@Component({
  selector: 'my-app',
  template: '<p>hello world</p>'
})
export class App implements OnInit {
  public ngOnInit(): void {}
```

### 1. ngOnInit()

### 2. ngOnChanges()

### 3. ngDoCheck()

### 4. ngAfterContentInit()

### 5. ngAfterContentChecked()

### 6. ngAfterViewInit()

### 7. ngAfterViewChecked()

### 8. ngOnDestroy()

## ng-template-outlet

## providers

## DesignPatterns

### 1. Angular component design patterns

It is a kind of component without business logic. It takes some inputs for customize and has some outputs to emit events. The main functionalities:

- separating code
- separating responsible (view | control)

### 2. Singleton (services root / any)

One instance in whole app (provideIn: 'root')
One instance in lazy-load module (provideIn: 'any')

### 3. Factory

### 4. Observer

### 5. Decorator

### 6. MVC model, view, controller

## Performance Optimization Techniques

### 1. onPush strategy

```typescript
@Component({
     selector: 'child-component',
     changeDetection: ChangeDetectionStrategy.OnPush,
     template: `...`
})
```

### 2. Detach Change Detection/NgZone

### 3. Using Pure Pipes

### 4. AOT Compilation

### 5. Lazy Loading

### 6. Trackby

```typescript
@Component({
  selector: 'my-app',
  template: `
   <li *ngFor="let item of list; trackBy:identify">{{item.name}}</li>
  `
})
export class App {
  list:[];

  identify(index, item){
     return item.name;
  }
```

### 7. Web Workers

### 8. Preloading Modules

### 9. Resolve Guards

### 10. Unsubscribe from Observables

### 11. Pagination

### 12. Infinite Scroll

### 13. Virtual Scroll

### 14. Cache response using interceptors

## OnPush vs Default ChangeDetectionStrategy
