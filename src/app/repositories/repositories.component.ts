import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RespositoriesService } from '../services/respositories.services';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos: any = []
  error = null
  constructor(
    private repoService: RespositoriesService
  ) { }
  @ViewChild('form') repo: ElementRef
  ngOnInit(): void {
  }
  onSubmit() {
    this.repo
  }
  onSearchRepos(repoName: any) {
    this.repoService.getRepos(repoName.value).subscribe(
      data => {
        this.repos = data
        console.log("repo data", data)
      },
      err => {
        this.error = err.error.message
        console.log("Error from repos", err)
      }
    )
  }
}
