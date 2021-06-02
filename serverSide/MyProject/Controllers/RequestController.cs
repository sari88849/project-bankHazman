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
    [RoutePrefix("api/Request")]

    public class RequestController : ApiController
    {
        [HttpGet]
        [Route("getRequest")]
        public IHttpActionResult getRequest(int limit)
        {
            return Ok(RequestBL.getRequest(limit));
        }

        [HttpGet]
        [Route("SendMail/{CodeUserT}/{CodeUserS}/{codeLimit}")]
        public IHttpActionResult SendMail(int CodeUserT, int CodeUserS, int codeLimit )
        {
            MailBL.mailSend(CodeUserT, CodeUserS, codeLimit);
            return Ok(true);
        }

       


        //[Route("getUserIsCorrect/{sector}/{min}/{time}")]
        //public IHttpActionResult getUserIsCorrect(int sector, int min, Nullable<int> time)
        //{
        //    return Ok(UsersBL.getUserIsCorrect(sector, min, time));
        //}

    }
}
