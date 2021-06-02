using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using FileUploadAPI.Models;
using DTO;
using BL;

namespace MyProject.Controllers
{
    [RoutePrefix("api/Waiting")]

    public class WaitingController : ApiController
    {

        //הוספה
        [HttpPut]
        [Route("AddWaiting")]
        public IHttpActionResult AddWaiting(WaitingDTO waiting)
        {
            return Ok(WaitingBL.AddWaiting(waiting));
        }

        //שליפה
        [HttpGet]
        [Route("getWaiting")]
        public IHttpActionResult getWaiting()
        {
            return Ok(WaitingBL.getWaiting());
        }

        [HttpGet]
        [Route("getLimitByUser/{codeuser}")]
        public IHttpActionResult getLimitByUser(int codeuser)
        {
            return Ok(WaitingBL.getLimitByUser(codeuser));
        }

        [HttpGet]
        [Route("SendMailTeacherToUser/{userT}/{userS}/{limit}/{waitingId}")]
        public IHttpActionResult SendMailTeacherToUser(int userT, int userS, int limit, int waitingId)
        {
            MailTeacherToUserBL.mailSend(userT, userS, limit, waitingId);
            return Ok(true);
        }

        [HttpGet]
        [Route("GetWaitingById/{waiting}")]
        public IHttpActionResult GetWaitingById(int waiting)
        {
            return Ok(WaitingBL.GetWaitingById(waiting));
        }

        [HttpDelete]
        [Route("deleteWaiting/{waitingId}")]
        public IHttpActionResult deleteWaiting(int waitingId)
        {
            return Ok(WaitingBL.deleteWaiting(waitingId));
        }

        [HttpGet]
        [Route("getIfWaiting/{waitingId}")]
        public IHttpActionResult getIfWaiting(int waitingId)
        {
            return Ok(WaitingBL.getIfWaiting(waitingId));
        }



        //[HttpGet]
        //[Route("GetFile")]
        ////download file api  
        //public HttpResponseMessage GetFile(string docFile)
        //{
        //    //Create HTTP Response.  
        //    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
        //    //Set the File Path.  
        //    string filePath = System.Web.HttpContext.Current.Server.MapPath("~/Files/") + docFile + ".docx";
        //    //Check whether File exists.  
        //    if (!File.Exists(filePath))
        //    {
        //        //Throw 404 (Not Found) exception if File not found.  
        //        response.StatusCode = HttpStatusCode.NotFound;
        //        response.ReasonPhrase = string.Format("File not found: {0} .", docFile);
        //        throw new HttpResponseException(response);
        //    }
        //    //Read the File into a Byte Array.  
        //    byte[] bytes = File.ReadAllBytes(filePath);
        //    //Set the Response Content.  
        //    response.Content = new ByteArrayContent(bytes);
        //    //Set the Response Content Length.  
        //    response.Content.Headers.ContentLength = bytes.LongLength;
        //    //Set the Content Disposition Header Value and FileName.  
        //    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
        //    response.Content.Headers.ContentDisposition.FileName = docFile + ".docx";
        //    //Set the File Content Type.  
        //    response.Content.Headers.ContentType = new MediaTypeHeaderValue(MimeMapping.GetMimeMapping(docFile + ".docx"));
        //    return response;
        //}
        //[HttpGet]
        //[Route("GetFileDetails")]
        //public IHttpActionResult GetFile()
        //{
        //    var url = HttpContext.Current.Request.Url;
        //    IEnumerable<FileDetailsVM> lstFile = new List<FileDetailsVM>();
        //    try
        //    {
        //        AngularDBEntities objEntity = new AngularDBEntities();
        //        lstFile = objEntity.FileDetails.Select(a => new FileDetailsVM
        //        {
        //            FileId = a.FileId,
        //            UserName = a.UserName,
        //            Image = url.Scheme + "://" + url.Host + ":" + url.Port + "/Files/" + a.Image,
        //            DocFile = a.DocFile,
        //            ImageName = a.Image
        //        }).ToList();
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //    return Ok(lstFile);
        //}
        //[HttpGet]
        //[Route("GetImage")]
        ////download Image file api  
        //public HttpResponseMessage GetImage(string image)
        //{
        //    //Create HTTP Response.  
        //    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
        //    //Set the File Path.  
        //    string filePath = System.Web.HttpContext.Current.Server.MapPath("~/Files/") + image + ".PNG";
        //    //Check whether File exists.  
        //    if (!File.Exists(filePath))
        //    {
        //        //Throw 404 (Not Found) exception if File not found.  
        //        response.StatusCode = HttpStatusCode.NotFound;
        //        response.ReasonPhrase = string.Format("File not found: {0} .", image);
        //        throw new HttpResponseException(response);
        //    }
        //    //Read the File into a Byte Array.  
        //    byte[] bytes = File.ReadAllBytes(filePath);
        //    //Set the Response Content.  
        //    response.Content = new ByteArrayContent(bytes);
        //    //Set the Response Content Length.  
        //    response.Content.Headers.ContentLength = bytes.LongLength;
        //    //Set the Content Disposition Header Value and FileName.  
        //    response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
        //    response.Content.Headers.ContentDisposition.FileName = image + ".PNG";
        //    //Set the File Content Type.  
        //    response.Content.Headers.ContentType = new MediaTypeHeaderValue(MimeMapping.GetMimeMapping(image + ".PNG"));
        //    return response;
        //}
    }
}
