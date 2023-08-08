import { Component,OnInit } from '@angular/core';
import { VisitService } from '../../../core/service/visit.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
   visits:any[] = []

  constructor(
    private readonly visitService:VisitService
  ){}
  ngOnInit(): void {
     const date = new Date()
     this.visitService.getArchive(date).subscribe({
      next:(res:any)=>{
        this.visits = res
      },
      error:(err:any)=>{
        console.log(err.error);
      }
     })
  }
}
