using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;


namespace MyProject.Controllers
{
    [RoutePrefix("api/Lesson")]

    public class LessonsController : ApiController
    {
        [HttpGet]
        [Route("GetAllById/{id}")]
        public IHttpActionResult GetAllById(int id)
        {
            return Ok(LessonsBL.GetAllById(id));
        }


        //השיעורים שלמדתי
        [HttpGet]
        [Route("INotLearn/{id}")]
        public IHttpActionResult INotLearn(int id)
        {
            return Ok(LessonsBL.INotLearn(id));
        }
        //השיעורים שלימדתי
        [HttpGet]
        [Route("ILearn/{id}")]
        public IHttpActionResult ILearn()
        {
            return Ok(LessonsBL.ILearn());
        }

        //הוספה
        [HttpPut]
        [Route("AddLesson")]
        public IHttpActionResult AddLesson(LessonsDTO lessons)
        {
            return Ok(LessonsBL.AddLesson(lessons));
        }

        [HttpGet]
        [Route("countLesson")]
        public IHttpActionResult countLesson(int id)
        {
            return Ok(LessonsBL.countLesson(id));
        }


        //[HttpGet]
        //[Route("countLesson")]
        //public IHttpActionResult countLesson(int id)
        //{
        //    return Ok(LessonsBL.countLesson(id));
        //}

        //פונקצייה שסופרת את מספר השיעורים שלימדתי
        [HttpGet]
        [Route("getLessonITeach/{id}")]
        public IHttpActionResult getLessonITeach(int id)
        {
            int i = LessonsBL.getLessonITeach(id);
            return Ok(i);
        }
    }
}
