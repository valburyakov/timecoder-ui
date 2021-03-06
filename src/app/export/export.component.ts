import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../service/episode.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Episode } from '../model/episode';
import { PatronList } from '../model/patron.list';
import { PatronService } from '../service/patron.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  episode: Episode;
  patronList: PatronList;

  constructor(private episodeService: EpisodeService,
              private route: ActivatedRoute,
              private router: Router,
              private patronService: PatronService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.episodeService.getEpisodeById(id).subscribe(data => this.episode = data);
    this.patronService.getPatronList().subscribe(data => {
      this.patronList = data;
    });
  }

  gotToPost() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['post'], { queryParams: { episodeId: id} });

  }
}
